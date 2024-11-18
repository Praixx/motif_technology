import Clutch from "../assets/clutch.png"


function ReviewFooter() {
    return (
        <div className="flex flex-row gap-4">
            <div>
                <p>reviewed on</p>
                <img src={Clutch} alt="clutch-logo" />
            </div>
            <div>
                <p>Rating component goes in here</p>
                <p>46 reviews</p>
            </div>

        </div>
    )
}

export default ReviewFooter
