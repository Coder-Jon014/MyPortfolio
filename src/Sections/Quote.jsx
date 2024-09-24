const Quote = () => {
    return (
        <section id="quote" className="Quote bg-gray-100 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="quote-content max-w-4xl mx-auto">
                <h1 className='quote text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800'>
                    "Design is not just what it looks like and feels like."
                </h1>
                <h1 className='quote text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800'>
                    "Design is how it works."
                </h1>
                <h1 className='quote text-xl sm:text-2xl text-center md:text-3xl font-semibold text-gray-600'>
                    "We're still under construction. We'll be ready soon."
                </h1>
            </div>
        </section>
    );
};

export default Quote;