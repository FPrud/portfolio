import RotatingStar from "./RotatingStar";

export default function Loading() {

    return (
        <div className="flex flex-col self-center pb-5 text-center">
            <RotatingStar className="h-20 mt-5 self-center" />
            <h3>Chargement...</h3>
        </div>
    );
};