import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ value, onChange, label, placeholder, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4 relative">
      <label className="text-[13px] text-slate-800 block mb-1">{label}</label>
      <div className="relative">
        <input
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          className="w-full px-3 py-2 border rounded-md outline-none"
          value={value}
          onChange={onChange}
        />
        {type === "password" && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
            {showPassword ? (
              <FaRegEye size={20} onClick={toggleShowPassword} />
            ) : (
              <FaRegEyeSlash size={20} onClick={toggleShowPassword} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
