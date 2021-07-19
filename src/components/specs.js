import { current_tech_specs } from '../data'

export default function Specs() {
    return (
        <>
            <h2>My Current Tech Specs 💻</h2>
			<ul>
				{current_tech_specs.map((pc, index) => (
					<li key={index}>
						<h3>{pc.name}</h3>
						<details>
							<table>
								<tbody>
									{Object.keys(pc).map((keyName, keyIndex) => (
										keyName !== 'name' && (
											<tr key={keyIndex}>
												<td width='120'>
													{keyName}
												</td>
												{Array.isArray(pc.[keyName]) ? (
													<td>
														<ul>
															{pc.[keyName].map((keyNameArrValue, keyNameArrIndex) => (
																<li key={keyNameArrIndex}>
																	{keyNameArrValue}
																</li>
															))}
														</ul>
													</td>
												)
												:
												(
													<td>
														{pc.[keyName]}
													</td>
												)}
											</tr>
										)
									))}
								</tbody>
							</table>
						</details>
					</li>
				))}
			</ul>
        </>
    )
}