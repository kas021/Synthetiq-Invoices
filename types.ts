
export interface InvoiceItem {
  id: string;
  description: string;
  period: string;
  amount: number | string;
}

export interface InvoiceData {
  id: string;
  invoiceNumber: string;
  date: string;
  fromName: string;
  fromAddress: string;
  fromPostcode: string;
  toName: string;
  toAddress: string;
  toPostcode: string;
  items: InvoiceItem[];
  shipping: number | string;
  bankName: string;
  accountNumber: string;
  sortCode: string;
  logo: string | null;
  pdfData?: string;
}

export interface SenderDetails {
  fromName: string;
  fromAddress: string;
  fromPostcode: string;
  bankName: string;
  accountNumber: string;
  sortCode: string;
}

export interface SenderProfile extends SenderDetails {
  profileName: string;
}

export interface ClientProfile {
  profileName: string;
  toName: string;
  toAddress: string;
  toPostcode: string;
}

export type PdfTemplate = 'classic' | 'modern' | 'minimalist';

export interface Currency {
  symbol: string;
  code: string;
  name: string;
}

export type ThemeName = 'mint' | 'midnight' | 'sunset' | 'professional';

export interface AppSettings {
  pdfTemplate: PdfTemplate;
  currency: Currency;
  theme: ThemeName;
}
