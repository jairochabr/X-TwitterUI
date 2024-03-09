import twitterLogo from "./assets/X.svg";
import { House, Hash, Bell, EnvelopeSimple, BookmarkSimple, FileText, User, DotsThreeCircle, Sparkle } from 'phosphor-react';

export function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={twitterLogo} alt="logo" />

        <nav className="main-navigation">
          <a className="active" href="#home">
            <House />
            Home
            </a>
          <a href="#explore">
            <Hash />
            Explore
            </a>
          <a href="#notifications">
            <Bell />
            Notifications
            </a>
          <a href="#messages">
            <EnvelopeSimple />
            Messages
            </a>
          <a href="#bookmarks">
            <BookmarkSimple />
            Bookmarks
            </a>
          <a href="#lists">
            <FileText />
            Lists
            </a>
          <a href="#profile">
            <User />
            Profile
            </a>
          <a href="#more">
            <DotsThreeCircle />
            More
            </a>
        </nav>

        <button className="new-tweet" type="button">
          Post
        </button>

      </aside>
      <div className="content">
        
        <main className="timeline">
          <div className="timeline-header">
            Home
            <Sparkle />
          </div>

          <form className="new-tweet-form">
            
          </form>

        </main>

      </div>
    </div>
  );
}
