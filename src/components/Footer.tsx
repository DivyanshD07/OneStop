import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer text-end text-white py-6 mt-12">
      <p className="flex justify-around text-center">&copy; OneStop {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer;