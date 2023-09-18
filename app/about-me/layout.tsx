import SubPageLayout from '../components/SubPageLayout'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SubPageLayout heading="About">{children}</SubPageLayout>
}
