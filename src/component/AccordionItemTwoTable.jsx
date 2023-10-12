import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function AccordionItemTwoTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Status</TableHead>
          <TableHead className="flex-1">Information</TableHead>
          <TableHead className="w-[200px]">Dates</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Submission</TableCell>
          <TableCell>
            $Applicants apply for this year's lottery, the DV2025 program
          </TableCell>
          <TableCell>Until November 8, 2023</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Lottery</TableCell>
          <TableCell>
            $The DV2025 Lottery Draw is conducted by using a random computerized
            lottery draw.
          </TableCell>
          <TableCell>March 2024</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Result</TableCell>
          <TableCell>
            $The DV2025 lottery results are made public and applicants can check
            online if they were selected.
          </TableCell>
          <TableCell>May 8, 2024</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Process</TableCell>
          <TableCell>
            $Winners apply for their Green Card and pay the fee.
          </TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Entry</TableCell>
          <TableCell>
            $Applicants who won the Green Card Lottery and successfully received
            the visa, may enter the United States of America at any time in the
            year 2025 as permanent residents (hence the name DV2025).
          </TableCell>
          <TableCell>-</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
