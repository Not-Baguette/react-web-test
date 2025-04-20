import React, { useState } from "react";
import styles from "./profile.module.css";

function Profile(props) {
    const [profileShown, setProfileShown] = useState(true);

    const toggleProfile = () => {
        setProfileShown(!profileShown);
    };

    return (
        <div className={styles.profile} onClick={toggleProfile}>
            <div
                className={`${styles["profile-content"]} ${
                    profileShown ? styles["show-front"] : styles["show-back"]
                }`}
            >
                <div className={`${styles.front}`}>
                    <img src={props.img} className={styles.profileImg} alt="Profile" />
                    <div className={styles.profileTextContainer}>
                        <h2 className={styles.profileTitle}>{props.title}</h2>
                        <p className={styles.profileTextFront}>{props.textFront}</p>
                    </div>
                </div>
                <div className={`${styles.back}`}>
                    <p className={styles.profileTextBack}>{props.textBack}</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;