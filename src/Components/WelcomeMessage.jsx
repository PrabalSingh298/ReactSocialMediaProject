

const WelcomeMessage = (props) => {


    return <div className="welcome_message">
        <center>
            <h1>There are no posts.</h1>
            <button type="button" class="btn btn-primary" onClick={props.handleFetchPost}>Fetch Posts from Server.</button>
        </center>
    </div>
}

export default WelcomeMessage;