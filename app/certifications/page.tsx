import { Metadata } from 'next';
import CertificationsClient from './CertificationsClient';

export const metadata: Metadata = {
  title: 'Certifications - Ananya Shah',
  description: 'Professional credentials and technical certifications earned by Ananya Shah',
  keywords: 'certifications, credentials, python, pandas, iot security, machine learning, sap'
};

export default function CertificationsPage() {
  return <CertificationsClient />;
}