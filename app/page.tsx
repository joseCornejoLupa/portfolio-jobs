import { RoleProvider } from "./_components/RoleContext";
import { LangProvider } from "./_components/LangContext";
import PageContent from "./_components/PageContent";

export default function Page() {
  return (
    <LangProvider>
      <RoleProvider>
        <PageContent />
      </RoleProvider>
    </LangProvider>
  );
}
