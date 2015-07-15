using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.DirectoryServices.ActiveDirectory;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace jQueryFastFood.Models
{
    public class NameModel
    {
        public int Id { get; set; }
        [MinLength(1)]
        [MaxLength(45)]
        [Required(AllowEmptyStrings = false, ErrorMessage = "Borrower Name is required")]
        public string Borrower { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessage = "Co Borrower Name is required")]
        [Display(Name = "Co Borrower")]
        public string CoBorrower { get; set; }
    }

    public class MortgageTerms
    {
        public int Id { get; set; }
        public string Amount { get; set; }
         [Display(Name = "Interest Rate")]
        public string InterestRate { get; set; }
         [Display(Name = "Number of Months")]
        public string NumberOfMonths { get; set; }

    }

    public class PropertyInformation
    {
        public int Id { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
         [Display(Name = "Legal Description")]
        public string LegalDescription { get; set; }
         [Display(Name = "Loan Purpose")]
        public string LoanPurpose { get; set; }
        public string Occupancy { get; set; }
         [Display(Name = "Original Cost")]
        public string OriginalCost { get; set; }
         [Display(Name = "Existing Liens")]
        public string ExistingLiens { get; set; }

    }
    public class EmpoloyeerInformation
    {
        public int Id { get; set; }
        public string Name { get; set; }
        [Required]
        [Range(0, 10)]
        public int YearsOnJob { get; set; }
        [Range(0, 10)]
        public int YearsInProfession { get; set; }
        public string PositionTitle { get; set; }
    }
}
