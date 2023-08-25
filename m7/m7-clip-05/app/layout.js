import 'server-only';

import '../styles/bootstrap.min.css';
import '../styles/site.css';
import '../styles/fontawesome/css/all.css';
import '../styles/poppins/poppins.css';

export const metadata = {
  title: 'Todo App',
  description:
    'Generated for Todo App in Pluralsight Course React 18 Components',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
