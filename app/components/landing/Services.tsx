import { services } from "@/app/constants";


export default function Services() {
    return (
        <section className="bg-zinc-50 py-24 dark:bg-zinc-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                        Our Expertise
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        Comprehensive legal services designed to meet the diverse needs of our clients.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2 lg:gap-12">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="group relative flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-900/5 transition-shadow hover:shadow-md dark:bg-zinc-800 dark:ring-white/10"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/10 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                <service.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold leading-8 text-zinc-900 dark:text-white">
                                    {service.title}
                                </h3>
                                <p className="mt-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
