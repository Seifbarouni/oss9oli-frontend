export default function Step0({file, setFile, message, setMessage, nextStep}) {

    return(
        <div>
            <input type="file" accept=".mp3" onChange={e=>setFile(e.target.files[0])} />
            <input type="textarea" value={message} onChange={e=>setMessage(e.target.value)} />
            <button onClick={nextStep}>Next</button>
        </div>
    )
}
