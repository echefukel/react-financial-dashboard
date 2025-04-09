
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const downloadInvoicePdf = (item) => {
    const doc = new jsPDF();
    doc.setFontSize(16)
    doc.text("Transaction Invoice", 14 , 20);
    autoTable(doc, {
        startY: 30,
        head: [["Field", "Details"]],
        body: [
          ["Invoice ID", `#${item.id.toString().padStart(4, "0")}`],
          ["Name", item.name],
          ["Business", item.business],
          ["Type", item.type],
          ["Date", item.date],
        ],
      });
    
      doc.save(`Invoice_${item.id.toString().padStart(4, "0")}.pdf`);

}