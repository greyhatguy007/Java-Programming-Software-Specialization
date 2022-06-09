class Main{
    public static void main(String[] args) {
        String r1 = findSimpleGene("AAATGCCCTAACTAGATTAAGAAACC");
        System.out.println(r1);
    }
    public static String findSimpleGene(String dna){
        String result = "";
        int sta = dna.indexOf("ATG");
        if(sta==-1){
            return "";
        }
        int en = dna.indexOf("TAA", sta+3);
        result = dna.substring(sta,en+3);
        return result;
    }

}


