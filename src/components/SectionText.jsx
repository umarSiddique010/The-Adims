import React from 'react';

const SectionText = () => {
    const movementSolutions = [
        "Professionals conquering long workdays",
        "Parents chasing endless energy", 
        "Travelers exploring unknown paths",
        "Athletes pushing personal boundaries"
    ];

    const innovationFeatures = [
        "Biomechanically designed support that adapts to your unique movement",
        "Advanced materials that breathe with you",
        "Ergonomic technology that understands the complexity of human motion"
    ];

    return (
        <div id='about' className="pt-14 pb-24 font-serif min-h-screen bg-gray-100 mt-40 text-gray-800">
            <div className="container mx-auto px-4 py-12">
                <header className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-blue-900 mb-4">
                        Your Journey, Your Comfort: Life&apos;s True Companion
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We understand life isn&apos;t about what you wear, but how you move through the world.
                    </p>
                </header>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-blue-800 text-center mb-8">
                        More Than Just Covering Your Feet
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 text-blue-500 mx-auto mb-4 text-center">★</div>
                            <h3 className="text-xl font-bold text-center mb-4">Embrace Every Challenge</h3>
                            <p className="text-gray-600 text-center">
                                Our products are crafted for those who seek to push beyond limitations.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 text-blue-500 mx-auto mb-4 text-center">✦</div>
                            <h3 className="text-xl font-bold text-center mb-4">Comfort in Motion</h3>
                            <p className="text-gray-600 text-center">
                                Designed to move with you, adapting to every twist and turn of your journey.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 text-blue-500 mx-auto mb-4 text-center">✧</div>
                            <h3 className="text-xl font-bold text-center mb-4">Demand Excellence</h3>
                            <p className="text-gray-600 text-center">
                                More than just a product - a daily companion that understands your needs.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-16 bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-3xl font-semibold text-blue-800 text-center mb-8">
                        The Science of Movement
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {innovationFeatures.map((feature, index) => (
                            <div key={index} className="text-center">
                                <p className="text-gray-600">{feature}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-blue-800 text-center mb-8">
                        Life&apos;s Unpredictable Terrain
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {movementSolutions.map((solution, index) => (
                            <div key={index} className="bg-blue-50 p-4 rounded-lg">
                                <p className="text-gray-700">{solution}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="text-center bg-blue-900 text-white py-16 rounded-lg">
                    <h2 className="text-4xl font-bold mb-6">
                        Empowerment Starts from the Ground Up
                    </h2>
                    <p className="max-w-2xl mx-auto italic text-xl mb-8">
                        We don&apos;t just create products. We craft experiences that move with you, support you, and elevate your entire approach to daily living.
                    </p>
                    <button className="transition-all duration-500 ease-in-out hover:scale-125 bg-white  text-blue-900 px-8 py-3 rounded-full font-bold 
                    hover:bg-blue-100 cursor-pointer">
                       <a href="#products"> Discover Your Journey</a>
                    </button>
                </section>

                <footer className="text-center mt-12">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        Your Movement. Your Comfort. Your Story.
                    </h3>
                    <p className="text-slate-950 text-xl italic">
                        - The Adims
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default SectionText;