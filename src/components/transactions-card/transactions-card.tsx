// @ts-nocheck
import React, { Fragment } from "react";
import { useWindowResize } from "../../helpers/useWindowResize";
import { transactionsData } from "./transactions-data";

function TransactionCards() {
	const { width } = useWindowResize();

	/** Displays Mapped Transactions */
	const mappedTransactions = () => {
		return (
			<>
				{transactionsData.map((fetchedTransactions, index) => {
					return (
						<>
							{width > 1060 ? (
								<tbody
									key={index}
									className="h-[96px] hover:bg-[#F7F7F7] border-t border-klasha-border cursor-pointer"
								>
									<tr>
										<td className="w-4/ ">
											<p className="ml-[30px] font-InterRegular text-sm text-[#484848]">
												{fetchedTransactions.transactionId}
											</p>
										</td>
										<td className="">
											<p className="ml-[80px] font-InterRegular text-sm text-[#484848]">
												{fetchedTransactions.source}
											</p>
										</td>
										<td className="">
											<p className="ml-[30px] font-InterRegular text-sm text-[#484848]">
												{fetchedTransactions.customerName}
											</p>
										</td>
										<td className="">
											<p className="ml-[30px] font-InterRegular text-sm text-[#484848]">
												{fetchedTransactions.customerEmail}
											</p>
										</td>
										<td className="">
											<p className="ml-[30px] font-InterRegular text-sm text-[#484848]">
												{fetchedTransactions.amount}
											</p>
										</td>
										<td className="">
											<p className="ml-[30px] font-InterRegular text-sm text-[#484848]">
												{fetchedTransactions.requestDate}
											</p>
										</td>
										<td className="">
											<p className="ml-[30px] font-InterRegular text-sm text-[#484848]">
												{fetchedTransactions.status}
											</p>
										</td>
									</tr>
								</tbody>
							) : (
								<div className="pb-4 hover:bg-[#F7F7F7] border-t border-klasha-border cursor-pointer">
									<div className="mx-4 md:mx-12">
										<p className="text-center my-4 text-lg font-GeneralSansSemibold text-[#5F5F5F]">
											Transaction ID
										</p>
										<p className="text-center font-InterRegular text-sm text-[#484848]">
											{fetchedTransactions.transactionId}
										</p>

										<p className="text-center my-4 text-lg font-GeneralSansSemibold text-[#5F5F5F]">
											Source
										</p>
										<p className="text-center font-InterRegular text-sm text-[#484848]">
											{fetchedTransactions.source}
										</p>

										<p className="text-center my-4 text-lg font-GeneralSansSemibold text-[#5F5F5F]">
											Customer name
										</p>
										<p className="text-center font-InterRegular text-sm text-[#484848]">
											{fetchedTransactions.customerName}
										</p>

										<p className="text-center my-4 text-lg font-GeneralSansSemibold text-[#5F5F5F]">
											Customer email
										</p>
										<p className="text-center font-InterRegular text-sm text-[#484848]">
											{fetchedTransactions.customerEmail}
										</p>

										<p className="text-center my-4 text-lg font-GeneralSansSemibold text-[#5F5F5F]">
											Amount
										</p>
										<p className="text-center font-InterRegular text-sm text-[#484848]">
											{fetchedTransactions.amount}
										</p>

										<p className="text-center my-4 text-lg font-GeneralSansSemibold text-[#5F5F5F]">
											Request Date
										</p>
										<p className="text-center font-InterRegular text-sm text-[#484848]">
											{fetchedTransactions.requestDate}
										</p>

										<p className="text-center my-4 text-lg font-GeneralSansSemibold text-[#5F5F5F]">
											Status
										</p>
										<p className="text-center font-InterRegular text-sm text-[#484848]">
											{fetchedTransactions.status}
										</p>
									</div>
								</div>
							)}
						</>
					);
				})}
			</>
		);
	};

	return <>{mappedTransactions()}</>;
}

export default TransactionCards;
