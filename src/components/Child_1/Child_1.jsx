
const Child_1 = () => {
    return (
        <div className="w-1/2 mx-auto border-2 border-green-500 pb-8">
            <p className="m-4 mx-6 font-medium">Child-1</p>
            <div className="flex justify-center items-center gap-4 pt-6">
                <button className="bg-red-500 px-4 py-2 rounded-lg text-white font-medium hover:bg-red-700">Decrement</button>
                <h3></h3>
                <button className="bg-emerald-500 px-4 py-2 rounded-lg text-white font-medium hover:bg-emerald-700">Increment</button>
            </div>
        </div>
    );
};

export default Child_1;