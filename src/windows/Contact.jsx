import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img
          src="/images/devansh.png"
          alt="Devansh"
          className="w-20 rounded-full"
        />
        <h3>Let's Connect</h3>
        <p>I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
        <p>devanshpatel1515@gmail.com</p>
        <ul>
          {socials.map(({ id, bg, link, icon: Icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={Icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
