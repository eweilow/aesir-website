import React, { useEffect } from "react";
import { WindowLocation } from "@reach/router";
import clsx from "clsx";

import { useSpring, animated, config } from "react-spring";

import styles from "./style.css";
import { NavbarLink } from "@components/navbarLink";
import { NavbarSocialIcons } from "./icons";

const links = [
  {
    title: "Facebook",
    link: "https://www.facebook.com/aesirkth/",
    icon: NavbarSocialIcons.Facebook
  },
  {
    title: "Facebook Messenger",
    link: "https://m.me/aesirkth/",
    icon: NavbarSocialIcons.Messenger
  },
  {
    title: "Instagram",
    link: "https://instagram.com/aesirkth/",
    icon: NavbarSocialIcons.Instagram
  },
  {
    title: "Twitter",
    link: "https://twitter.com/aesirkth/",
    icon: NavbarSocialIcons.Twitter
  },
  {
    title: "GitHub",
    link: "https://github.com/aesirkth/",
    icon: NavbarSocialIcons.GitHub
  }
];

export const Navbar: React.FC<{ location: WindowLocation }> = props => {
  const standardRowHeight = 48;
  const transformOffset = 24;

  const [{ offset }, set] = useSpring(() => ({
    offset: props.location.pathname !== "/blog" ? 1 : 0,
    config: {
      ...config.stiff
    }
  }));
  useEffect(() => {
    if (props.location.pathname !== "/blog") {
      set({ offset: 1 });
      return;
    }
    function listener() {
      const y = window.scrollY;
      set({
        offset: Math.max(0, Math.min(1, y / transformOffset))
      });
    }
    listener();
    window.addEventListener("scroll", listener);

    return () => window.removeEventListener("scroll", listener);
  }, [props.location.pathname]);

  const linksTransform = offset.interpolate(
    (value: number) => `translate3d(0, ${transformOffset * (1 - value)}px, 0)`
  );
  const gradientOpacity = offset.interpolate((value: number) => value * 0.35);
  const helperTextOpacity = offset.interpolate((value: number) => Math.max(0.5, 1 - value));

  return (
    <nav className={styles.navbar}>
      <animated.div
        className={styles.flex}
        style={{
          transform: linksTransform
        }}
      >
        <div
          className={clsx(styles.links, styles.socialMedia)}
          style={{
            height: standardRowHeight
          }}
        >
          <animated.div
            style={{
              opacity: helperTextOpacity
            }}
            className={styles.followUs}
          >
            follow us
          </animated.div>
          {links.map(({ link, title, icon }) => (
            <NavbarLink key={link} href={link} title={title} icon={icon} />
          ))}
        </div>
      </animated.div>
      <animated.div
        style={{
          opacity: gradientOpacity
        }}
        className={styles.gradient}
      />
    </nav>
  );
};
