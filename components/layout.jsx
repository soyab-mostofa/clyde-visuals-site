import Background from './Background';
import Header from './Widgets/Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="relative z-10 pt-[7vh]">{children}</main>
      <Background />
    </>
  );
}
