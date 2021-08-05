import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks";

import {
  fetchNotifications,
  selectAllNotifications,
} from "../features/notifications/notificationSlice";

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector(selectAllNotifications);
  const numUnreadNotifications = notifications.filter(
    (n: any) => !n.read
  ).length;

  const fetchNewNotifications = () => {
    dispatch(fetchNotifications());
  };

  let unreadNotificationsBadge;

  if (numUnreadNotifications > 0) {
    unreadNotificationsBadge = (
      <span className="badge">{numUnreadNotifications}</span>
    );
  }
  return (
    <nav>
      <section>
        <h1>Social Media Replicate</h1>
        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
            <Link to="/users">Users</Link>
            <Link to="/notifications">
              Notifications {unreadNotificationsBadge}
            </Link>
            <Link to="/notifications">Notifications</Link>
          </div>
          <button className="button" onClick={fetchNewNotifications}>
            Refresh Notification
          </button>
        </div>
      </section>
    </nav>
  );
};
