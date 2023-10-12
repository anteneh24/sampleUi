import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function AccordionItemOneTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="flex-1">Fee Type</TableHead>
          <TableHead className="flex-1">
            Cost (to Applicant Living in the U.S.)
          </TableHead>
          <TableHead className="flex-1">
            Cost (to Applicant Living Abroad)
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Family Sponsorship Form (I-130)</TableCell>
          <TableCell>$535</TableCell>
          <TableCell>CreditCard</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Green Card Application Form (I-485)</TableCell>
          <TableCell>$1140</TableCell>
          <TableCell>Not required</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Financial Support Form (I-864)</TableCell>
          <TableCell>$0</TableCell>
          <TableCell>$120</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Work Permit Application Form (I-765) (optional)</TableCell>
          <TableCell>$0</TableCell>
          <TableCell>Not required</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Travel Permit Application Form (I-131) (optional)
          </TableCell>
          <TableCell>$0</TableCell>
          <TableCell>Not required</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Biometrics (Fingerprints & Photo)</TableCell>
          <TableCell>$85</TableCell>
          <TableCell>$0</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>State Department Processing</TableCell>
          <TableCell>Not required</TableCell>
          <TableCell>$325</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>USCIS Immigrant Fee</TableCell>
          <TableCell>Not required</TableCell>
          <TableCell>$220</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Medical Examination</TableCell>
          <TableCell>*Varies</TableCell>
          <TableCell>*Varies</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Total</TableCell>
          <TableCell className="font-medium">$1760</TableCell>
          <TableCell className="font-medium">$1200</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
