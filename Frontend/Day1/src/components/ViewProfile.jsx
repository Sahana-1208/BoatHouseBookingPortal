import '../assets/css/ViewProfile.css';
function ViewProfile(){
    return(
        <div className="viewprofilewrapper">
            <h1>Your Profile</h1>
            <div className="viewprofileoptions">
                <label className='viewlabel'>Name</label>
                <input></input>
            </div>
            <div className="viewprofileoptions">
                <label className='viewlabel'>Gender</label><br/>
                <input type="radio" name="gender"/>
                <label>Male</label>
                <input type="radio" name="gender"/>
                <label>Female</label>
            </div>
            <div className="viewprofileoptions">
                <label className='viewlabel'>Date of Birth</label>
                <input type="date"/>
            </div>
            <div className="viewprofileoptions">
                <label className='viewlabel'>Contact number</label>
                <input type="number"/>
            </div>
            <div className="viewprofileoptions">
                <label className='viewlabel'>Adress</label><br/>
                <textarea/>
            </div>
            <button>Edit</button>
        </div>
    )
}
export default ViewProfile;