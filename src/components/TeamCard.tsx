"use client";
import Image from "next/image";
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TeamCard({ member }: { member: any }) {
	return (
		<div className="flex flex-col items-center text-center">
			<div className="w-full min-h-[16rem] max-h-[16rem] sm:min-h-[20rem] sm:max-h-[20rem] relative overflow-hidden mb-4 shadow-lg">
				<Image
					src={member.image}
					alt={member.name}
					layout="fill"
					objectFit="cover"
				/>
			</div>

			<h2 className="text-xl font-semibold">{member.name}</h2>
			<p className="text-sm text-gray-600 italic">{member.role}</p>
			<p className="text-sm mt-2 text-gray-700">{member.blurb}</p>
		</div>
	);
}
