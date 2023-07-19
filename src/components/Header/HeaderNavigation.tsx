import { classnames } from "@/utils/classnames";
import { Slot } from "@radix-ui/react-slot";

type HeaderNavigationProps = {
  aschild?: boolean;
  className?: string;
  navigation: {
    name: string;
    href: string;
  }[];
};

export function HeaderNavigation({
  navigation,
  className,
  aschild,
}: HeaderNavigationProps) {
  const Component = aschild ? Slot : "div";

  return (
    <Component
      className={classnames(String(className), "hidden lg:flex lg:gap-x-12")}
    >
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-sm font-semibold leading-6"
        >
          {item.name}
        </a>
      ))}
    </Component>
  );
}
