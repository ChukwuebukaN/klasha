// @ts-nocheck
import React, { Fragment, useEffect } from "react";
import Buttons from "../../components/buttons/buttons";
import Header from "../../components/header/header";
import Inputs from "../../components/inputs/inputs";
import TransactionCards from "../../components/transactions-card/transactions-card";
import { ReactComponent as SearchIcon } from "../../assets/svg/transactions/search-icon.svg";
import { ReactComponent as FilterIcon } from "../../assets/svg/transactions/filter-icon.svg";
import Paginate from "../../components/paginate/paginate";
import { useWindowResize } from "../../helpers/useWindowResize";

function Transactions({ setShowMobileMenu }) {
	const { width } = useWindowResize();

	useEffect(() => {
		const ac = new AbortController();
		document.title = "Klasha | Transactions";
		return function cleanup() {
			ac.abort();
		};
	}, []);

	/** Displays Desktop View */
	const desktop = () => {
		return (
			<div>
				<Header setShowMobileMenu={setShowMobileMenu} />
				<div className="px-[32px] pb-5 mt-[100px]">
					<div className="bg-white border border-klasha-border rounded-lg">
						<div className="py-4 px-4 h-[62px] font-GeneralSansMedium text-base">
							Transaction history
						</div>
						<div className="flex items-center justify-between py-[8px] px-4 border-t border-klasha-border">
							<div>
								<Inputs
									type="text"
									label="Search"
									placeholder="Search"
									icon2={
										<SearchIcon
											title="Search"
											className="cursor-pointer absolute -mt-[32px] ml-[145px]"
										/>
									}
									styling="text-klasha-black font-InterRegular text-sm h-[38px] w-[180px] pl-[14px] pr-[40px] flex items-center justify-between border border-klasha-border rounded-lg placeholder-[#565C69]"
								/>
							</div>

							<div className="flex items-center w-[200px]">
								<Buttons
									title="Filter"
									text="Filter"
									children2={<FilterIcon className="ml-2" />}
									textStyling="font-InterSemibold text-[12px]"
									buttonStyling="w-[94px] h-[40px] flex items-center justify-center w-full bg-white rounded-[8px] border border-klasha-black"
								/>
								<Buttons
									title="Export"
									text="Export"
									textStyling="font-InterSemibold text-[12px]"
									buttonStyling="w-[94px] h-[40px] ml-3 flex items-center justify-center w-full bg-white rounded-[8px] border border-klasha-black"
								/>
							</div>
						</div>
						<div className="hidden lg:block w-full border-t border-klasha-border pt-[40px]">
							<table className="w-full p-0 m-0 border-collapse table-fixed">
								<thead className="text-[#5F5F5F] text-base align-top">
									<tr className="">
										<th
											scope="col"
											className="text-left font-GeneralSansSemibold"
										>
											<p className="ml-[30px]">Transaction ID</p>
										</th>
										<th
											scope="col"
											className="text-left font-GeneralSansSemibold"
										>
											<p className="ml-[80px]">Source</p>
										</th>
										<th
											scope="col"
											className="text-left font-GeneralSansSemibold"
										>
											<p className="ml-[30px]">Customer name</p>
										</th>
										<th
											scope="col"
											className="text-left font-GeneralSansSemibold"
										>
											<p className="ml-[30px]">Customer email</p>
										</th>
										<th
											scope="col"
											className="text-left font-GeneralSansSemibold"
										>
											<p className="ml-[30px]">Amount</p>
										</th>
										<th
											scope="col"
											className="text-left font-GeneralSansSemibold"
										>
											<p className="ml-[30px]">Request date</p>
										</th>
										<th
											scope="col"
											className="text-left font-GeneralSansSemibold"
										>
											<p className="ml-[30px]">Status</p>
										</th>
									</tr>
									<tr className="h-2" />
								</thead>
								<TransactionCards />
							</table>

							<div className="py-4 px-4 h-[62px] border-t border-klasha-border flex items-center justify-end">
								<Paginate />
							</div>
						</div>
						<div className="block lg:hidden rounded-full">
							<>
								<TransactionCards />
							</>
						</div>
					</div>
				</div>
			</div>
		);
	};

	/** Displays Mobile View */
	const mobile = () => {
		return (
			<div>
				<Header setShowMobileMenu={setShowMobileMenu} />
				<div className="px-[32px] pb-5 mt-[100px]">
					<div className="bg-white border border-klasha-border rounded-lg">
						<div className="py-4 px-4 h-[62px] font-GeneralSansMedium text-base">
							Transaction history
						</div>
						<div className=" py-[8px] px-4 border-t border-klasha-border">
							<div>
								<Inputs
									type="text"
									label="Search"
									placeholder="Search"
									icon2={
										<SearchIcon
											title="Search"
											className="cursor-pointer absolute -mt-[32px] right-[60px]"
										/>
									}
									styling="text-klasha-black font-InterRegular text-sm h-[38px] w-full pl-[14px] pr-[40px] flex items-center justify-between border border-klasha-border rounded-lg placeholder-[#565C69]"
								/>
							</div>

							<div className="flex items-center justify-evenly w-full mt-[20px]">
								<Buttons
									title="Filter"
									text="Filter"
									children2={<FilterIcon className="ml-2" />}
									textStyling="font-InterSemibold text-[12px]"
									buttonStyling="w-2/6 h-[40px] flex items-center justify-center bg-white rounded-[8px] border border-klasha-black"
								/>
								<Buttons
									title="Export"
									text="Export"
									textStyling="font-InterSemibold text-[12px]"
									buttonStyling="w-2/6 h-[40px] ml-3 flex items-center justify-center  bg-white rounded-[8px] border border-klasha-black"
								/>
							</div>
						</div>

						<div className="block lg:hidden rounded-full">
							<>
								<TransactionCards />
								<div className="py-4 px-4 h-[62px] border-t border-klasha-border flex items-center justify-end">
									<Paginate />
								</div>
							</>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return <>{width > 1060 ? desktop() : mobile()}</>;
}

export default Transactions;
