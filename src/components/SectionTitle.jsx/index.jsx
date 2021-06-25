import React from 'react'
import "./styles.scss";

function SectionTitle({ title, icon, style }) {
    return (
        <div className="title-wrapper" style={{...style}} >
            <div className="title">
                {
                    icon && 
                    (
                        <div className="title-icon">
                            { icon }
                        </div>
                    )
                }
                <div className="title-label">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default SectionTitle
