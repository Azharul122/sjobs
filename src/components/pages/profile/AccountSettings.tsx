/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Form, Input, Button, Select, Modal, message } from "antd";
import { MailOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { countries } from "@/constance/CountryData";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setAccountSettings } from "@/redux/features/profile/profileSlice";

interface PersonalInfoProps {
  onComplete: () => void;
  isLoading?: boolean;
}

declare global {
  interface Window {
    google: any;
  }
}

export default function AccountSettings({
  onComplete,
  isLoading,
}: PersonalInfoProps) {
  const [form] = Form.useForm();
  const [isMapModalVisible, setIsMapModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+1");

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isMapModalVisible) {
      loadGoogleMapsScript();
    }
  }, [isMapModalVisible]);

  const loadGoogleMapsScript = () => {
    if (window.google) return; // Already loaded

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AlzaSy6QNhTDQVDYVlBZgq6RAdXnR3oal9eyksS&libraries=places`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  };

  const initMap = () => {
    const mapElement = document.getElementById("map");
    if (!mapElement || !window.google) return;

    const map = new window.google.maps.Map(mapElement, {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 8,
    });

    const marker = new window.google.maps.Marker({
      map,
      draggable: true,
    });

    // Add click listener for the map
    map.addListener("click", (event: any) => {
      if (event.latLng) {
        marker.setPosition(event.latLng);

        // Reverse geocode to get address
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode(
          { location: event.latLng },
          (results: any[], status: string) => {
            if (status === "OK" && results[0]) {
              setSelectedLocation(results[0].formatted_address);
            }
          }
        );
      }
    });

    // Initialize Autocomplete for search
    const input = document.getElementById("search-input") as HTMLInputElement;
    if (input) {
      const autocomplete = new window.google.maps.places.Autocomplete(input);
      autocomplete.bindTo("bounds", map);

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place.geometry || !place.geometry.location) {
          message.warning("No details available for this location");
          return;
        }

        map.setCenter(place.geometry.location);
        map.setZoom(15);
        marker.setPosition(place.geometry.location);

        setSelectedLocation(place.formatted_address || "");
      });
    }
  };

  const handleFinish = (values: any) => {
    const accountData = {
      ...values,
      phone: `${countryCode}${phoneNumber}`,
      countryCode,
    };

    dispatch(setAccountSettings(accountData));
    onComplete();
    message.success("Account settings saved successfully!");
  };

  const showMapModal = () => {
    setIsMapModalVisible(true);
  };

  const handleMapOk = () => {
    if (!selectedLocation) {
      message.warning("Please select a location");
      return;
    }
    form.setFieldsValue({ location: selectedLocation });
    setIsMapModalVisible(false);
  };

  const handleMapCancel = () => {
    setIsMapModalVisible(false);
    setSelectedLocation("");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
  };

  const handleCountryCodeChange = (value: string) => {
    setCountryCode(value.split("_")[1]);
  };

  return (
    <div className="mx-auto">
      <div className="mt-8">
        <h3 className="text-[#333] text-xl font-medium mb-5">
          Account Information
        </h3>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{
            email: "",
          }}
        >
          <Form.Item
            label="Map Location"
            name="location"
            rules={[{ required: true, message: "Please select your location" }]}
          >
            <Input
              placeholder="Enter your location"
              suffix={
                <EnvironmentOutlined
                  className="text-gray-400 cursor-pointer hover:text-blue-500"
                  onClick={showMapModal}
                />
              }
              size="large"
              onClick={showMapModal}
              readOnly
            />
          </Form.Item>

          <Form.Item label="Phone" required>
            <Input
              className="[&:focus]:!shadow-none"
              addonBefore={
                <Select
                  size="large"
                  style={{ width: 150 }}
                  defaultValue="Country Code"
                  onChange={handleCountryCodeChange}
                  showSearch
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    String(option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                >
                  {countries.map((country) => (
                    <Select.Option
                      key={country.code}
                      value={`${country.name}_${country.flag}`}
                    >
                      <div className="flex items-center gap-2">
                        <Image
                          height={20}
                          width={20}
                          src={country.flag}
                          alt={country.name}
                          className="rounded-sm"
                        />
                        {country.name} {"(" + country.code + ")"}
                      </div>
                    </Select.Option>
                  ))}
                </Select>
              }
              value={phoneNumber}
              onChange={handlePhoneChange}
              size="large"
              maxLength={15}
              placeholder="Enter your phone number"
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input
              prefix={<MailOutlined className="text-gray-400 mr-2" />}
              placeholder="Email address"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button
              size="large"
              className="!bg-primary hover:!bg-primary/90 px-6 !py-5 rounded-md text-white"
              type="primary"
              htmlType="submit"
              loading={isLoading}
              block
            >
              Finish Setup
            </Button>
          </Form.Item>
        </Form>
      </div>

      <Modal
        title="Select Location"
        open={isMapModalVisible}
        onOk={handleMapOk}
        onCancel={handleMapCancel}
        width={800}
        footer={[
          <Button key="back" onClick={handleMapCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={handleMapOk}
            disabled={!selectedLocation}
          >
            Confirm Location
          </Button>,
        ]}
        afterOpenChange={(open) => {
          if (open) {
            // Small delay to ensure the modal is fully rendered
            setTimeout(() => {
              initMap();
            }, 300);
          }
        }}
      >
        <div className="mb-4">
          <Input
            id="search-input"
            placeholder="Search for a location"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            allowClear
          />
        </div>
        <div id="map" className="w-full h-[400px] rounded-lg"></div>
        {selectedLocation && (
          <div className="mt-4 p-2 bg-gray-50 rounded">
            <p className="font-medium">Selected Location:</p>
            <p>{selectedLocation}</p>
          </div>
        )}
      </Modal>

      <style jsx global>{`
        .ant-select-focused:not(.ant-select-disabled).ant-select:not(
            .ant-select-customize-input
          )
          .ant-select-selector {
          box-shadow: none !important;
        }

        .ant-input-affix-wrapper-focused {
          box-shadow: none !important;
        }
      `}</style>
    </div>
  );
}
