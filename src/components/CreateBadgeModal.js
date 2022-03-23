import { useState } from "react";
import "./CreateBadgeModal.scss";

const CreateBadgeModal = ({ onClick }) => {
  const [view, setView] = useState(1);

  return (
    <div className="createBadgeModalBackground" onClick={onClick}>
      <div className="CreateBadgeModal">
        {(() => {
          if (view === 1) {
            return (
              <>
              <div className="modal-create-badge">
                <div className="modal-header">
                  <span>Create Badge</span>
                </div>

                <div className="badge-image"></div>

                <div className="input-wrap">
                  <h4 className="input-title">Badge Name</h4>
                  <input type="text" placeholder="Badge Name"></input>
                </div>

                <div className="input-wrap">
                  <h4 className="input-title">Badge Description</h4>
                  <textarea placeholder="Badge Description" />
                </div>

                <div className="input-wrap">
                  <h4 className="input-title">Icon Colour</h4>

                  <div className="colour-circle-container">
                    <div
                      className="colour-circle"
                      style={{ backgroundColor: "#254C55" }}
                    ></div>
                    <div
                      className="colour-circle"
                      style={{ backgroundColor: "#5690C7" }}
                    ></div>
                    <div
                      className="colour-circle"
                      style={{ backgroundColor: "#9BE2FF" }}
                    ></div>
                    <div
                      className="colour-circle"
                      style={{ backgroundColor: "#E15866" }}
                    ></div>
                  </div>
                </div>

                <button onClick={() => setView(2)}>Next</button>
                </div>
              </>
            );
          } else if (view === 2) {
            return (
              <>
              <div className="modal-badge-created">
                <h2>Badge Created!</h2>
                <button>Award Badge</button>
                </div>
              </>
            );
          }
        })()}
      </div>
    </div>
  );
};

export default CreateBadgeModal;
