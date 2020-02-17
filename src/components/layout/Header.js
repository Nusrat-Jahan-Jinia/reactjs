import React from 'react';
import { FaAccessibleIcon } from 'react-icons/fa';
import {Link} from "react-router-dom";
export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
            <Link to={'/'}><img src="/images/logo.png" alt="Todoist" /></Link>
        </div>
        <div className="settings">
            <button type="button">
              <FaAccessibleIcon/>
            </button>
        </div>

      </nav>
    </header>
  );
};

