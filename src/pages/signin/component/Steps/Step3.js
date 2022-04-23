const Step3 = ({
    handelNext,
    handelPrev,
    handleSkip,
}) => {

    return (
        <div>


            <button onClick={handelPrev}>Prev</button>
            <button onClick={handelNext}>Next</button>
            <button onClick={handleSkip}>Skip</button>
        </div>
    )
}
export default Step3;