// Original line-art spectacle illustration — used in place of stock photography.
function FrameIllustration({ style = "round", color = "#7c8c4a", width = 120 }) {
  if (style === "round") {
    return (
      <svg width={width} viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="35" cy="30" r="26" stroke={color} strokeWidth="3" />
        <circle cx="105" cy="30" r="26" stroke={color} strokeWidth="3" />
        <path d="M61 27C65 20 75 20 79 27" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <path d="M9 26L0 20" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <path d="M131 26L140 20" stroke={color} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (style === "square") {
    return (
      <svg width={width} viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="9" y="8" width="52" height="42" rx="10" stroke={color} strokeWidth="3" />
        <rect x="79" y="8" width="52" height="42" rx="10" stroke={color} strokeWidth="3" />
        <path d="M61 26H79" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <path d="M9 22L0 16" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <path d="M131 22L140 16" stroke={color} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (style === "cateye") {
    return (
      <svg width={width} viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M9 30C9 15 30 8 40 14C48 18 48 42 34 46C18 50 9 42 9 30Z" stroke={color} strokeWidth="3" />
        <path d="M131 30C131 15 110 8 100 14C92 18 92 42 106 46C122 50 131 42 131 30Z" stroke={color} strokeWidth="3" />
        <path d="M40 22C50 16 90 16 100 22" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <path d="M9 28L0 22" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <path d="M131 28L140 22" stroke={color} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (style === "aviator") {
    return (
      <svg width={width} viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M8 22C8 14 18 10 34 12C46 14 50 24 46 34C42 46 24 50 14 42C7 36 6 28 8 22Z" stroke={color} strokeWidth="3" />
        <path d="M132 22C132 14 122 10 106 12C94 14 90 24 94 34C98 46 116 50 126 42C133 36 134 28 132 22Z" stroke={color} strokeWidth="3" />
        <path d="M50 18C58 12 82 12 90 18" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <path d="M8 20L0 15" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <path d="M132 20L140 15" stroke={color} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (style === "oval") {
    return (
      <svg width={width} viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse cx="35" cy="30" rx="27" ry="22" stroke={color} strokeWidth="3" />
        <ellipse cx="105" cy="30" rx="27" ry="22" stroke={color} strokeWidth="3" />
        <path d="M62 28C66 22 74 22 78 28" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <path d="M8 26L0 20" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <path d="M132 26L140 20" stroke={color} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (style === "rimless") {
    return (
      <svg width={width} viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="35" cy="30" r="24" stroke={color} strokeWidth="1.6" opacity="0.55" />
        <circle cx="105" cy="30" r="24" stroke={color} strokeWidth="1.6" opacity="0.55" />
        <path d="M59 30H81" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <path d="M11 24L0 18" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <path d="M129 24L140 18" stroke={color} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (style === "browline") {
    return (
      <svg width={width} viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M9 16H61" stroke={color} strokeWidth="4" strokeLinecap="round" />
        <path d="M79 16H131" stroke={color} strokeWidth="4" strokeLinecap="round" />
        <path d="M9 16C7 24 9 42 22 46C36 50 40 34 40 24" stroke={color} strokeWidth="2.2" />
        <path d="M131 16C133 24 131 42 118 46C104 50 100 34 100 24" stroke={color} strokeWidth="2.2" />
        <path d="M40 24C48 18 92 18 100 24" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
        <path d="M9 20L0 16" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <path d="M131 20L140 16" stroke={color} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (style === "hexagon") {
    return (
      <svg width={width} viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M22 8H48L61 30L48 52H22L9 30L22 8Z" stroke={color} strokeWidth="3" />
        <path d="M92 8H118L131 30L118 52H92L79 30L92 8Z" stroke={color} strokeWidth="3" />
        <path d="M61 28C66 22 74 22 79 28" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <path d="M9 26L0 20" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <path d="M131 26L140 20" stroke={color} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  // sunglasses style
  return (
    <svg width={width} viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 24C8 18 14 14 22 14H50C58 14 62 20 62 26" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M132 24C132 18 126 14 118 14H90C82 14 78 20 78 26" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <rect x="8" y="24" width="54" height="26" rx="13" fill={color} opacity="0.85" />
      <rect x="78" y="24" width="54" height="26" rx="13" fill={color} opacity="0.85" />
      <path d="M62 32H78" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default FrameIllustration;
