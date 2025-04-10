// src/pages/SettingsPage.jsx
import { AlertCircle } from "lucide-react";
import React, { useState, } from "react";
import { FaPen } from "react-icons/fa";

const SettingsPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("userSettings");
    return savedData
      ? JSON.parse(savedData)
      : {
          firstName: "",
          lastName: "",
          dob: "",
          mobile: "",
          email: "",
          newPassword: "",
          confirmPassword: "",
          profileImage: null,
          
        };
  });

  const {
    firstName,
    lastName,
    dob,
    mobile,
    email,
    newPassword,
    confirmPassword,
  

    } = formData;

  const isFormValid =
    firstName && lastName && dob && mobile && email && newPassword && confirmPassword && profileImage;

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleSave = () => {
    localStorage.setItem("userSettings", JSON.stringify(formData));
    console.log("Saved data:", formData);
    setIsEditing(false);
    
  };

  const handlePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handlePasswordVisibility2 = () => {
    setIsPasswordVisible2((prev) => !prev);
  };
const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      setProfileImage(reader.result);
      setFormData({ ...formData, profileImage: reader.result });
    };
    reader.readAsDataURL(file);
  }
};
  return (
    <div className="p-6 md:p-10 lg:p-16">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Account Information
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Update your account information
          </p>
        </div>

        <button
          onClick={toggleEdit}
          className="flex items-center gap-1 text-green-600 hover:underline focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5h6M11 9h6m-6 4h6m-6 4h6M5 5h.01M5 9h.01M5 13h.01M5 17h.01"
            />
          </svg>
          {isEditing ? "Cancel" : "Edit"}
        </button>

        {isEditing && (
          <button
            disabled={!isFormValid}
            onClick={handleSave}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Save
          </button>
        )}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-6">
          Personal Information
        </h3>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              First Name
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              disabled={!isEditing}
              className="w-full border border-gray-200 px-4 py-2 rounded-md bg-gray-100 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Last</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              disabled={!isEditing}
              className="w-full border border-gray-200 px-4 py-2 rounded-md bg-gray-100 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              value={formData.dob}
              onChange={(e) =>
                setFormData({ ...formData, dob: e.target.value })
              }
              disabled={!isEditing}
              className="w-full border border-gray-200 px-4 py-2 rounded-md bg-gray-100 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Mobile Number
            </label>
            <input
              type="text"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
              disabled={!isEditing}
              className="w-full border border-gray-200 px-4 py-2 rounded-md bg-gray-100 text-sm"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <div className="flex items-center border border-gray-200 rounded-md bg-gray-100">
              <span className="px-3 text-gray-400">📧</span>
              <input
                type="text"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                disabled={!isEditing}
                className="w-full py-2 px-2 bg-transparent text-sm focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              New Password
            </label>
            <div className="flex items-center border border-gray-200 rounded-md bg-gray-100">
              <span className="px-3 text-gray-400">🔒</span>
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="New Password"
                value={formData.newPassword}
                onChange={(e) =>
                  setFormData({ ...formData, newPassword: e.target.value })
                }
                disabled={!isEditing}
                className="w-full py-2 px-2 bg-transparent text-sm focus:outline-none"
              />
              <span
                className="px-3 text-gray-400 cursor-pointer"
                onClick={handlePasswordVisibility}
              >
                {isPasswordVisible ? "🔐" : "👁️"}
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Confirm Password
            </label>
            <div className="flex items-center border border-gray-200 rounded-md bg-gray-100">
              <span className="px-3 text-gray-400">🔒</span>
              <input
                type={isPasswordVisible2 ? "text" : "password"}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                disabled={!isEditing}
                className="w-full py-2 px-2 bg-transparent text-sm focus:outline-none"
              />
              <span
                className="px-3 text-gray-400 cursor-pointer"
                onClick={handlePasswordVisibility2}
              >
                {isPasswordVisible2 ? "🔐" : "👁️"}
              </span>
            </div>
          </div>
          {/* handle image upload */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Profile Picture
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={!isEditing}
              className="w-full border border-gray-200 px-4 py-2 rounded-md bg-gray-100 text-sm"
            />
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default SettingsPage;
