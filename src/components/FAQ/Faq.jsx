import React from 'react';

const Faq = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Course Arena
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="27df4f81-c854-45de-942a-fe90f7a300f9"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">The</span>
                    </span>{' '}
                    skill, is your best future best friend
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Course Arena is the biggest online tutorial platform.You can learn several course from here and grow your skill.
                </p>
            </div>

            <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto my-4">
                <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                        what is cors?
                        </div>
                        <div className="collapse-content">
                            <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto my-4">
                <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                        Why are you using firebase? What other options do you have to implement authentication?
                        </div>
                        <div className="collapse-content">
                            <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Faq;