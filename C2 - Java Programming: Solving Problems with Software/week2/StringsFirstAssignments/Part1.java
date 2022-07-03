public class Part1 {

    public static String findGeneSample(String dna){
        // Start codon : ATG
        // Stop codon : TAA
        String result = "";
        int startIndex = dna.indexOf("ATG");
        if(startIndex == -1){
            return "";
        }
        int stopIndex = dna.indexOf("TAA", startIndex+3);
        if(stopIndex == -1){
            return "";
        }
        result = dna.substring(startIndex, stopIndex+3);
        if((stopIndex+3 - startIndex)%3!=0){
            return "";
        }
        return result;
    }

    public static void testSimpleGene(){
        String dna1 = "TAAGTATAA";
        String dna2 = "GTATGDATAGTA";
        String dna3 = "AGTATGTATTGCTAATATTG";
        String dna4 = "AGTATGTATTGCAATATTG";
        String dna5 = "GTTAGTAATGRTGTAA";

        System.out.println("GIVEN GENE : " + dna1 + "\nGENE FOUND : " + findGeneSample(dna1) + "\n\n");
        System.out.println("GIVEN GENE : " + dna2 + "\nGENE FOUND : " + findGeneSample(dna2) + "\n\n");
        System.out.println("GIVEN GENE : " + dna3 + "\nGENE FOUND : " + findGeneSample(dna3) + "\n\n");
        System.out.println("GIVEN GENE : " + dna4 + "\nGENE FOUND : " + findGeneSample(dna4) + "\n\n");
        System.out.println("GIVEN GENE : " + dna5 + "\nGENE FOUND : " + findGeneSample(dna5) + "\n\n");
    }

    public static void main(String[] args) {
        testSimpleGene();
    }
}
