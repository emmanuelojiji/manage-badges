import { useState } from "react";
import "./CreateBadgeModal.css";

const CreateBadgeModal = ({ onClick }) => {
  const [view, setView] = useState(1);

  return (
    <div className="createBadgeModalBackground" onClick={onClick}>
      <div className="CreateBadgeModal">
        <h4>Create Badge</h4>

        {/*(() => {
          if (view === 1) {
            return (
              <>
                <div className="input-wrap">
                  <h4>Badge Name</h4>
                  <input type="text"></input>
                </div>

                <div className="input-wrap">
                  <h4>Badge Description</h4>
                  <textarea />
                </div>

                <h3>Upload image</h3>
                <button onClick={() => setView(2)}>Next</button>
              </>
            );
          } else if (view === 2) {
            return (
              <>
                <h2>View 2</h2>
              </>
            );
          }
        })() */}
      </div>
    </div>
  );
};

export default CreateBadgeModal;
