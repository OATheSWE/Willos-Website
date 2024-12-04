import React, { useState } from "react";
import {
  TextInput,
  Button,
  Container,
  Group,
  Text,
  Title,
  Image,
} from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTwitter,
} from "@tabler/icons-react";
import axios from "axios";
import { styles } from "@/src/data";
import { ImageCollection } from "@/assets";
import "./index.css";

const App: React.FC = () => {
  const [email, setEmail] = useState<string>(""); // State to manage the email input
  const [message, setMessage] = useState<string>(""); // State to show success/error message

  const handleEmailSubmit = async () => {
    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbwDTLWBY_1I9lRs6XrrSwbpRS8VjtjCTiHRoB5-K_InAADQTxczyjYeybIAMrOkhojr/exec",
        { email }
      );

      if (response.status === 200) {
        setMessage("Email successfully added to the waiting list!");
        setEmail(""); // Clear input after successful submission
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      setMessage("Unable to send your email. Please try again later.");
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${styles.body} bg-primary`}>
      {/* Navbar */}
      <nav className="w-full py-4 flex items-center justify-center">
        <Image
          src={ImageCollection.logo} // Replace with your logo URL
          alt="Willos Logo"
          className="w-[120px]"
        />
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between mt-12 space-y-6 lg:space-y-0 w-full">
        {/* Text Content */}
        <div className="flex flex-col lg:text-left space-y-6 lg:w-[50%]">
          <Text className="text-lg text-left font-semibold text-black uppercase">
            - Coming Soon
          </Text>
          <Title
            order={1}
            className="text-4xl font-bold md:text-5xl text-black  leading-relaxed"
          >
            Better <span className="text-[#064F48]">food</span>,<br />
            Faster <span className="text-[#064F48]">delivery</span>
            <br />
            <span className="text-[#064F48] mt-4">-WILLOS</span> dey for you
          </Title>
          <Text className="text-gray-600 text-base md:text-lg leading-relaxed">
            Good food should be easy to get!{" "}
            <span className="font-bold text-[#064F48]">WILLOS</span> is your
            go-to app for quick, hassle-free delivery of all your favorite
            meals. From local dishes to global tastes, we’re here to satisfy
            your cravings.
          </Text>
          <Text className="text-black font-semibold">
            Hungry for <span className="text-[#064F48]">WILLOS</span>? Get
            notified on Launch day!
          </Text>

          {/* Email Input */}
          <div className="rounded-full w-full p-[6px] border-[1.5px] border-black flex justify-between">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-full border-0 border-none outline-0 outline-none p-2 px-5"
            />
            <button
              onClick={handleEmailSubmit}
              className="bg-accent hover:bg-orange-600 text-white w-[100px] font-medium rounded-full p-2"
            >
              Notify Me
            </button>
          </div>

          <Text className="text-sm text-gray-500">
            *Don’t worry we won’t spam you :)
          </Text>

          {/* Success/Error Message */}
          {message && <Text className="text-accent">{message}</Text>}
        </div>

        {/* Hero Image */}
        <div className="flex justify-start lg:justify-end mt-6 lg:mt-0 lg:w-[50%]">
          <Image
            src={ImageCollection.hero} // Replace with your hero image URL
            alt="Hero Image"
            className="max-w-[990px] w-full max-h-[350px] h-full"
          />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="py-20 w-full">
        <Container className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Media */}
          <Group className="flex gap-6">
            <a
              href="#"
              className="text-black hover:text-orange-500 transition duration-300 border-black border-[1.5px] p-2 rounded-full hover:border-orange-600"
            >
              <IconBrandInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-black hover:text-orange-500 transition duration-300 border-black border-[1.5px] p-2 rounded-full hover:border-orange-600"
            >
              <IconBrandFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-black hover:text-orange-500 transition duration-300 border-black border-[1.5px] p-2 rounded-full hover:border-orange-600"
            >
              <IconBrandTwitter size={24} />
            </a>
          </Group>

          {/* Links */}
          <Group className="flex gap-6 text-sm text-black">
            <a
              href="/"
              className="hover:text-accent transition duration-300 text-black"
            >
              FAQs
            </a>
            <a
              href="/"
              className="hover:text-accent underline my-2 transition duration-300 text-black"
            >
              Privacy Policy
            </a>
            <a
              href="/"
              className="hover:text-accent transition duration-300 text-black"
            >
              Contact Us
            </a>
          </Group>
        </Container>
      </footer>
    </div>
  );
};

export default App;
