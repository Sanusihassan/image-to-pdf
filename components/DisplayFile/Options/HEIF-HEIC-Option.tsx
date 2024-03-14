import HeifIcon from "@/components/icons/HeifIcon";
import { ToolState, setField } from "@/src/store";
import { BsFiletypeHeic } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
export const HEifHEicOptions = () => {
    const heifHeicType = useSelector(
        (state: { tool: ToolState }) => state.tool.heifHeicType
    );
    const dispatch = useDispatch();
    return (
        <>
            <div className="heif-heic-options">
                {/* <h6 className="title">Select File Type</h6> */}
                <div className="buttons">
                    <button className={`heif${heifHeicType === "heif" ? " active" : ""}`} onClick={() => { dispatch(setField({ heifHeicType: "heif" })) }}>
                        <div className="file-icon">
                            <HeifIcon className="icon" fill="white" />
                        </div>
                        <span>heif</span>
                    </button>
                    <button className={`heic${heifHeicType === "heic" ? " active" : ""}`} onClick={() => { dispatch(setField({ heifHeicType: "heic" })) }}>
                        <div className="file-icon">
                            <BsFiletypeHeic className="icon" />
                        </div>
                        <span>heic</span>
                    </button>
                </div>
            </div>
        </>
    )
}