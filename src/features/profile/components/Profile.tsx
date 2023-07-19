import { useAuth } from "@/features/authentication/hooks/use-auth";
import { ProfileForm } from "@/features/profile/components/ProfileForm";

export default function Profile() {
  return (
    <div>
      <div className="pb-8">
        <h2 className="text-2xl">Meu perfil</h2>
      </div>

      <ProfileForm />
    </div>
  );
}
