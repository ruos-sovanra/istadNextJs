import {Card} from "flowbite-react";

export default function News() {
    return (
        <>
            <section className=" container mx-auto">
                <h1 className="uppercase text-3xl font-extrabold pl-48 mb-4">Useful Content </h1>
                <div className="grid grid-cols-3 gap-y-3">
                    <Card
                        className="h-[400px] w-[400px]"
                        renderImage={() => <img
                            src="https://api.istad.co/media/image/ca4fca81-5460-40c8-9d6b-e9270cd2ecae.png"
                            alt="image 1" className="object-cover overflow-hidden h-[400px]"/>}
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Flutter Mobile Development
                        </h5>
                    </Card>
                    <Card
                        className="h-[400px] w-[400px]"
                        renderImage={() => <img
                            src="https://api.istad.co/media/image/779a9824-0e29-44ff-9f4c-922d78f04b1f.png"
                            alt="image 1" className="object-cover overflow-hidden h-[400px]"/>}
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Flutter Mobile Development
                        </h5>
                    </Card>
                    <Card
                        className="h-[400px] w-[400px]"
                        renderImage={() => <img
                            src="https://api.istad.co/media/image/53e118d6-58e3-4ec1-b40c-ef44f09c441e.jpg"
                            alt="image 1" className="object-cover overflow-hidden h-[400px]"/>}
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Flutter Mobile Development
                        </h5>
                    </Card>
                    <Card
                        className="h-[400px] w-[400px]"
                        renderImage={() => <img
                            src="https://api.istad.co/media/image/ca4fca81-5460-40c8-9d6b-e9270cd2ecae.png"
                            alt="image 1" className="object-cover overflow-hidden h-[400px]"/>}
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Flutter Mobile Development
                        </h5>
                    </Card>
                    <Card
                        className="h-[400px] w-[400px]"
                        renderImage={() => <img
                            src="https://api.istad.co/media/image/779a9824-0e29-44ff-9f4c-922d78f04b1f.png"
                            alt="image 1" className="object-cover overflow-hidden h-[400px]"/>}
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Flutter Mobile Development
                        </h5>
                    </Card>
                    <Card
                        className="h-[400px] w-[400px]"
                        renderImage={() => <img
                            src="https://api.istad.co/media/image/53e118d6-58e3-4ec1-b40c-ef44f09c441e.jpg"
                            alt="image 1" className="object-cover overflow-hidden h-[400px]"/>}
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Flutter Mobile Development
                        </h5>
                    </Card>
                    <Card
                        className="h-[400px] w-[400px]"
                        renderImage={() => <img
                            src="https://api.istad.co/media/image/ca4fca81-5460-40c8-9d6b-e9270cd2ecae.png"
                            alt="image 1" className="object-cover overflow-hidden h-[400px]"/>}
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Flutter Mobile Development
                        </h5>
                    </Card>
                    <Card
                        className="h-[400px] w-[400px]"
                        renderImage={() => <img
                            src="https://api.istad.co/media/image/779a9824-0e29-44ff-9f4c-922d78f04b1f.png"
                            alt="image 1" className="object-cover overflow-hidden h-[400px]"/>}
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Flutter Mobile Development
                        </h5>
                    </Card>
                    <Card
                        className="h-[400px] w-[400px]"
                        renderImage={() => <img
                            src="https://api.istad.co/media/image/53e118d6-58e3-4ec1-b40c-ef44f09c441e.jpg"
                            alt="image 1" className="object-cover overflow-hidden h-[400px]"/>}
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Flutter Mobile Development
                        </h5>
                    </Card>
                </div>

            </section>
        </>
    )
}