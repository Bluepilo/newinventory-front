import { FaCaretDown } from "react-icons/fa6";
import { BasicDrop, BizSelectStyle } from "../styles/app.styles";
import { useState } from "react";
import { IoIosCheckmarkCircle, IoMdBusiness } from "react-icons/io";
import { useAppDispatch } from "../redux/hooks";
import { Spinner } from "react-bootstrap";
import { FiPlusSquare } from "react-icons/fi";
import { GoTriangleDown } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import OutsideClick from "./OutsideClick";

const BusinessSelect = ({ onLayout }: { onLayout?: boolean }) => {
	const navigate = useNavigate();

	const dispatch = useAppDispatch();

	const [open, setOpen] = useState(false);
	const [load, setLoad] = useState(false);
	const [id, setId] = useState<any>(null);

	const switchHandler = async (id: any) => {};

	const bizz = [{ business: { id: 1, name: "Business One" } }];

	return (
		<OutsideClick handleToggle={() => setOpen(false)}>
			<BizSelectStyle>
				<div
					className={onLayout ? "head" : "select"}
					onClick={() => setOpen(!open)}
				>
					<h5>Afox Stores</h5>
					{onLayout ? <GoTriangleDown size={20} /> : <FaCaretDown />}
				</div>

				<BasicDrop $open={open}>
					{bizz.map((biz) => (
						<div
							className={`button shadow-sm ${
								1 === biz.business.id ? "active" : ""
							}`}
							key={biz.business.id}
							onClick={() => switchHandler(biz.business.id)}
						>
							{load && id == biz.business.id && (
								<Spinner
									size="sm"
									style={{ marginRight: "10px" }}
								/>
							)}
							<IoMdBusiness size={16} />
							<span>{biz.business.name}</span>
							{1 === biz.business.id && (
								<IoIosCheckmarkCircle
									size={16}
									className="ms-3"
								/>
							)}
						</div>
					))}
					<div
						className="button shadow-sm blue"
						onClick={() => {
							navigate("/dashboard/new-business");
							setOpen(false);
						}}
					>
						<FiPlusSquare size={16} />
						<span>Add a New Business</span>
					</div>
				</BasicDrop>
			</BizSelectStyle>
		</OutsideClick>
	);
};

export default BusinessSelect;
