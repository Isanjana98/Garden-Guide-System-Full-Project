import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
  Modal,
} from "react-bootstrap";
import axios from "axios";
import CategoryViewObj from "../components/ViewObjects/CategoryViewObj";
import UserViewObj from "../components/ViewObjects/UserViewObj";
import ProtectiveRoute from "../auth/ProtectiveRoute";
import { AuthConfig } from "../auth/AuthConfig";
import { BASE_URL } from "../config/Config";
import UserView from "./UserView";

function WebAdmin() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to a different website when not loading
    window.open(
      "http://localhost/GampahaBotnicalGarden/admin/public_html/",
      "_blank"
    );
  }, []);
}

export default WebAdmin;
