import { Plus } from "@assets/icon";
import { Disclosure, Transition } from "@headlessui/react";

function MyDisclosure({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-full">
      <div className="mx-auto w-full rounded-2xl transition-all duration-300">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center py-4 text-left sm:text-xl font-medium focus-visible:ring-opacity-75 transition-all duration-300 border-y border-slate-500 gap-2">
                <span>{title}</span>
                <div className={open ? "rotate-45" : ""}>
                  <Plus />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-300 ease-in"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-300 opacity-100"
                leave="transform duration-75 ease-out"
                leaveFrom="transform scale-300 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 sm:text-lg">
                  {description}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

export default MyDisclosure;
