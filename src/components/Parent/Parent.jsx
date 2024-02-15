import Child_1 from "../Child_1/Child_1";


const Parent = () => {
    return (
        <div className="border-2 border-yellow-500 rounded-md h-96">
            <p className="text-left m-4 mx-6 font-medium">Parent</p>

            <Child_1/>
        </div>
    );
};

export default Parent;