import Image from 'next/image';
import Logo from '@/public/icons/Websitelogo/google-icon-logo-svgrepo-com.svg';

export default function WebsiteLogo() {
  return (
    <div>
      <Image priority src={Logo} height={32} width={32} alt="Follow us on Twitter" />
    </div>
  );
}
