import { useState } from "react";
import "./CreateBadgeModal.scss";
import Card from "./Card";

const CreateBadgeModal = ({
  onClick,
  badgeName,
  badgeDescription,
  setBadgeName,
  setBadgeDescription,
  badgeInfo,
}) => {
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
                    <div className="modal-create-badge-content">

                    <div className="badge-image"></div>

                    <div className="input-wrap">
                      <h4 className="input-title">Badge Name</h4>
                      <input
                        type="text"
                        placeholder="Badge Name"
                        onChange={(e) => setBadgeName(e.target.value)}
                      ></input>
                    </div>

                    <div className="input-wrap">
                      <h4 className="input-title">Badge Description</h4>
                      <textarea
                        placeholder="Badge Description"
                        onChange={(e) => setBadgeDescription(e.target.value)}
                      />
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

                    <button
                      onClick={() => {
                        if (
                          badgeName.length == 0 ||
                          badgeDescription.length == 0
                        ) {
                          console.log("One or both are empty.");
                        } else if (badgeName && badgeDescription) {
                          setView(2);
                        }
                      }}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </>
            );
          } else if (view === 2) {
            return (
              <>
                <div className="modal-badge-created">
                  <h2>Badge Created!</h2>
                  <div className="badge-image"></div>
                  <h2 className="badgeName">'{badgeName}'</h2>
                  <p className="badgeDescription">{badgeDescription}</p>
                  <button onClick={() => setView(3)}>Award Badge</button>
                </div>
              </>
            );
          } else if (view === 3) {
            return (
              <div className="modal-badge-award">
                <div className="modal-header">
                  <h4>Choose Recipients</h4>
                </div>

                <div className="user-row">
                  <input type="checkbox" id="vehicle1" name="vehicle1"></input>
                  <div className="avatar"></div>

                  <span>Barrington Hayes </span>
                </div>

                <div className="user-row">
                  <input type="checkbox" id="vehicle1" name="vehicle1"></input>
                  <div className="avatar"></div>
                  <span>Charlotte Morgan </span>
                </div>

                <div className="user-row">
                  <input type="checkbox" id="vehicle1" name="vehicle1"></input>
                  <div className="avatar"></div>
                  <span>Danielle Caley</span>
                </div>

                <div className="user-row">
                  <input type="checkbox" id="vehicle1" name="vehicle1"></input>
                  <div className="avatar"></div>
                  <span>Emmanuel Ojiji </span>
                </div>

                <div className="user-row">
                  <input type="checkbox" id="vehicle1" name="vehicle1"></input>
                  <div className="avatar"></div>
                  <span>Michael Bryson</span>
                </div>

                <div className="user-row">
                  <input type="checkbox" id="vehicle1" name="vehicle1"></input>
                  <div className="avatar"></div>
                  <span>Joshua Brown</span>
                </div>
 
                <button>Award</button>
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
};

export default CreateBadgeModal;
