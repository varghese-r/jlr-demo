import JlrContext from "./jlr-context";

const JlrContextProvider = (props) => {
    const jlrContext = {
        name: "",
        id: "",
        payment_method: "",
    }

    return (
        <JlrContext.Provider value={jlrContext}>
            {props.children}
        </JlrContext.Provider>
    )
}

export default JlrContextProvider;